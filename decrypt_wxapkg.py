"""
PC/Mac 微信小程序 wxapkg V1MMWX 解密 (修正版)
格式: V1MMWX(6B) + AES_CBC_encrypted(1024B) + XOR_encrypted(rest)
解密:
  1. PBKDF2(password=wxid, salt="saltiest", iter=1000, dklen=32) → AES key
  2. AES-256-CBC(key, iv="the iv: 16 bytes") 解密前 1024 字节 → 取前 1023 字节
  3. 字节 1024 起用 ord(wxid[-2]) 逐字节异或
"""
import sys
import os
from Crypto.Cipher import AES
from Crypto.Protocol.KDF import PBKDF2

HEADER_MAGIC = b"V1MMWX"
SALT = b"saltiest"
IV = b"the iv: 16 bytes"
PBKDF2_ITER = 1000
PBKDF2_DKLEN = 32
ORIGINAL_PLAIN_LEN = 1023
AES_ENCRYPTED_LEN = 1024  # 1023 padded to 1024


def decrypt_wxapkg(input_path: str, wxid: str, output_path: str) -> bool:
    with open(input_path, "rb") as f:
        data = f.read()

    if not data.startswith(HEADER_MAGIC):
        print("[!] 不是 V1MMWX 格式，直接复制")
        with open(output_path, "wb") as f:
            f.write(data)
        return True

    print(f"[*] V1MMWX 加密, wxid={wxid}, 大小={len(data)} bytes")

    key = PBKDF2(wxid.encode(), SALT, dkLen=PBKDF2_DKLEN, count=PBKDF2_ITER)
    print(f"[*] PBKDF2 key: {key.hex()}")

    encrypted = data[len(HEADER_MAGIC):]

    # Part 1: AES-256-CBC 解密前 1024 字节
    cipher = AES.new(key, AES.MODE_CBC, IV)
    decrypted_aes = cipher.decrypt(encrypted[:AES_ENCRYPTED_LEN])
    # 取前 1023 字节（丢弃 PKCS#7 padding）
    plain_head = decrypted_aes[:ORIGINAL_PLAIN_LEN]

    # Part 2: XOR 解密剩余字节
    xor_key = ord(wxid[-2]) if len(wxid) >= 2 else 0x66
    print(f"[*] XOR key: 0x{xor_key:02X} ('{wxid[-2]}')")
    rest = bytearray(encrypted[AES_ENCRYPTED_LEN:])
    for i in range(len(rest)):
        rest[i] ^= xor_key

    result = plain_head + bytes(rest)

    if result[0] == 0xBE:
        print(f"[+] 解密成功! 文件头 0xBE, 输出大小 {len(result)} bytes")
    else:
        print(f"[?] 文件头: 0x{result[0]:02X} (期望 0xBE)")
        print(f"[*] 前 32 字节: {result[:32].hex()}")

    with open(output_path, "wb") as f:
        f.write(result)
    print(f"[+] 输出: {output_path}")
    return result[0] == 0xBE


if __name__ == "__main__":
    wxapkg_path = sys.argv[1] if len(sys.argv) > 1 else os.path.expanduser(
        "~/Library/Containers/com.tencent.xinWeChat/Data/Documents/"
        "app_data/radium/users/d717a710e2a117698fdb9bb9fa045fe7/"
        "applet/packages/wx44d254291f27af7c/105/__APP__.wxapkg"
    )
    wxid = sys.argv[2] if len(sys.argv) > 2 else "wx44d254291f27af7c"
    output = sys.argv[3] if len(sys.argv) > 3 else os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "decrypted_app.wxapkg"
    )

    decrypt_wxapkg(wxapkg_path, wxid, output)
