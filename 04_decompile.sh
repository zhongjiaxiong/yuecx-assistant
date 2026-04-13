#!/bin/bash
# wxapkg 解密 + 反编译一键脚本
# 依赖: Go (用于 wux1an/wxapkg 工具) 或 Python 3 + pip
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
OUTPUT_DIR="$SCRIPT_DIR/decompiled"
TOOLS_DIR="$SCRIPT_DIR/tools"

mkdir -p "$OUTPUT_DIR" "$TOOLS_DIR"

echo "=== 粤出行小程序 wxapkg 解密 + 反编译 ==="

# ---- 方法1: 使用 Go 版 wxapkg 工具 (推荐) ----
install_go_tool() {
    echo "[*] 安装 wux1an/wxapkg 工具..."
    if command -v go &>/dev/null; then
        GOBIN="$TOOLS_DIR" go install github.com/wux1an/wxapkg@latest
        echo "[+] 安装完成: $TOOLS_DIR/wxapkg"
    else
        echo "[!] 未安装 Go，尝试 Python 方法..."
        return 1
    fi
}

# ---- 方法2: 使用 Python 解密 ----
install_python_tool() {
    echo "[*] 安装 Python 解密依赖..."
    pip3 install pycryptodome pbkdf2 2>/dev/null || pip install pycryptodome pbkdf2
    
    if [ ! -d "$TOOLS_DIR/pc_wxapkg_decrypt" ]; then
        echo "[*] 下载 Python 解密工具..."
        git clone https://github.com/passer-W/pc_wxapkg_decrypt_python.git \
            "$TOOLS_DIR/pc_wxapkg_decrypt" 2>/dev/null || true
    fi
    echo "[+] Python 工具就绪"
}

echo ""
echo "请选择操作:"
echo "  1) 自动扫描并解密所有小程序包 (Go工具)"
echo "  2) 手动指定 wxapkg 文件解密 (Python)"
echo "  3) 仅解包已解密的文件"
echo ""
read -rp "选择 [1/2/3]: " choice

case $choice in
    1)
        install_go_tool || { echo "[!] Go 工具安装失败"; exit 1; }
        echo "[*] 扫描并解密..."
        "$TOOLS_DIR/wxapkg" scan -o "$OUTPUT_DIR"
        ;;
    2)
        read -rp "wxapkg 文件路径: " WXAPKG_PATH
        if [ ! -f "$WXAPKG_PATH" ]; then
            echo "[!] 文件不存在: $WXAPKG_PATH"
            exit 1
        fi
        
        install_python_tool
        
        read -rp "小程序 wxid (可从路径中获取): " WXID
        python3 "$TOOLS_DIR/pc_wxapkg_decrypt/main.py" \
            --wxid "$WXID" \
            --file "$WXAPKG_PATH" \
            --output "$OUTPUT_DIR/decrypted.wxapkg"
        
        echo "[*] 解密完成，使用 unveilr 解包..."
        if command -v npx &>/dev/null; then
            npx unveilr "$OUTPUT_DIR/decrypted.wxapkg" -o "$OUTPUT_DIR/source"
        else
            echo "[!] 需要 Node.js 环境来解包"
            echo "    npm install -g unveilr"
            echo "    unveilr $OUTPUT_DIR/decrypted.wxapkg -o $OUTPUT_DIR/source"
        fi
        ;;
    3)
        read -rp "已解密的 wxapkg 文件路径: " DECRYPTED_PATH
        if command -v npx &>/dev/null; then
            npx unveilr "$DECRYPTED_PATH" -o "$OUTPUT_DIR/source"
        else
            echo "[!] 需要 Node.js 环境"
            echo "    npx unveilr $DECRYPTED_PATH -o $OUTPUT_DIR/source"
        fi
        ;;
    *)
        echo "[!] 无效选择"
        exit 1
        ;;
esac

echo ""
echo "=== 解包完成 ==="
echo "源码目录: $OUTPUT_DIR/source"
echo ""
echo "下一步建议:"
echo "  1. 查看 app-service.js — 主业务逻辑"
echo "  2. 搜索关键词: sign, encrypt, challenge, token, secret"
echo "  3. 搜索 API 地址: grep -r 'https://' $OUTPUT_DIR/source/"
echo "  4. 查看 app.json — 页面路由和配置"
