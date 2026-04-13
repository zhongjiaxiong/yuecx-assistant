"""
wxapkg 解包器 - 将 .wxapkg 二进制文件解包为原始文件
格式:
  1 byte  : 0xBE (magic)
  4 bytes : info marker (0xED01 expected)
  4 bytes : index info length
  4 bytes : body info length
  4 bytes : last marker
  4 bytes : file count
  --- for each file ---
  4 bytes : name length
  N bytes : file name
  4 bytes : file offset
  4 bytes : file size
"""
import struct
import os
import sys


def unpack(wxapkg_path: str, output_dir: str):
    with open(wxapkg_path, "rb") as f:
        data = f.read()

    if data[0] != 0xBE:
        print(f"[!] 无效的 wxapkg 文件 (magic=0x{data[0]:02X}, 期望 0xBE)")
        return False

    # wxapkg header: 1(magic) + 4(marker) + 4(index_len) + 4(body_len) + 1(last) + 4(file_count) = 18
    # 但实际格式可能有变化，根据 hex dump 判断:
    # BE 00000000 0000002D E1 002474 42ED ...
    # magic=BE, marker=00000000, index_len varies
    # 尝试直接扫描文件名模式来定位文件表
    pos = 1
    # 跳过前导零，找到索引区
    # 标准格式: BE + 4(info_marker) + 4(index_info_len) + 4(body_info_len) + 1(last_marker) + 4(file_count)
    info_marker = struct.unpack(">I", data[pos:pos+4])[0]
    pos += 4

    # 根据 hex dump: 00 2d e1 看起来是 index_info_len=0x002DE1=11745
    index_info_len = struct.unpack(">I", data[pos:pos+4])[0]
    pos += 4
    body_info_len = struct.unpack(">I", data[pos:pos+4])[0]
    pos += 4

    # last marker 只有 1 字节
    last_marker = data[pos]
    pos += 1

    file_count = struct.unpack(">I", data[pos:pos+4])[0]
    pos += 4

    print(f"[*] marker=0x{info_marker:X}, index_len={index_info_len}, "
          f"body_len={body_info_len}, last=0x{last_marker:02X}, files={file_count}")

    os.makedirs(output_dir, exist_ok=True)

    files_extracted = 0
    for i in range(file_count):
        if pos + 4 > len(data):
            print(f"[!] 索引溢出, 已解包 {files_extracted} 个文件")
            break
        name_len = struct.unpack(">I", data[pos:pos+4])[0]
        pos += 4
        if name_len > 1024 or pos + name_len > len(data):
            print(f"[!] 异常文件名长度 {name_len}, 停止")
            break
        name = data[pos:pos+name_len].decode("utf-8", errors="replace")
        pos += name_len
        offset = struct.unpack(">I", data[pos:pos+4])[0]
        pos += 4
        size = struct.unpack(">I", data[pos:pos+4])[0]
        pos += 4

        file_data = data[offset:offset+size]

        out_path = os.path.join(output_dir, name.lstrip("/"))
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        with open(out_path, "wb") as f:
            f.write(file_data)
        files_extracted += 1

    print(f"[+] 解包完成: {files_extracted} 个文件 -> {output_dir}")
    return True


if __name__ == "__main__":
    pkg = sys.argv[1] if len(sys.argv) > 1 else os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "decrypted_app.wxapkg"
    )
    out = sys.argv[2] if len(sys.argv) > 2 else os.path.join(
        os.path.dirname(os.path.abspath(__file__)), "source"
    )
    unpack(pkg, out)
