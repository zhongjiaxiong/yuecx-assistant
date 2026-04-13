#!/bin/bash
# 在 PC 微信中定位粤出行城际巴士小程序的 .wxapkg 文件
# 使用方法: 先在 PC 微信中打开粤出行小程序，然后运行此脚本

set -euo pipefail

# macOS 微信小程序包路径（新版微信）
WECHAT_BASE="$HOME/Library/Containers/com.tencent.xinWeChat/Data"
WECHAT_BASE_ALT="$HOME/Library/Containers/com.tencent.xinWeChat"

echo "=== 粤出行城际巴士 wxapkg 定位工具 ==="
echo ""

# 搜索所有可能的 Applet 目录
found=0
for base in "$WECHAT_BASE" "$WECHAT_BASE_ALT" "$HOME/Library/Application Support/com.tencent.xinWeChat"; do
  if [ -d "$base" ]; then
    echo "[*] 搜索目录: $base"
    # 查找所有 .wxapkg 文件
    while IFS= read -r -d '' pkg; do
      mod_time=$(stat -f "%Sm" -t "%Y-%m-%d %H:%M:%S" "$pkg" 2>/dev/null || echo "unknown")
      size=$(stat -f "%z" "$pkg" 2>/dev/null || echo "0")
      size_kb=$((size / 1024))
      echo "  [+] 找到: $pkg"
      echo "      大小: ${size_kb}KB  修改时间: $mod_time"
      found=$((found + 1))
    done < <(find "$base" -name "*.wxapkg" -print0 2>/dev/null)
  fi
done

# Windows 路径提示（如果在 macOS 上没找到）
if [ $found -eq 0 ]; then
  echo ""
  echo "[!] 未找到 wxapkg 文件。请确认："
  echo "    1. 已在 PC 微信中打开过「粤出行城际巴士」小程序"
  echo "    2. 微信版本和路径可能不同，请手动搜索"
  echo ""
  echo "=== 常见路径 ==="
  echo "macOS (新版):"
  echo "  ~/Library/Containers/com.tencent.xinWeChat/Data/.../Applet/"
  echo ""
  echo "Windows:"
  echo "  %USERPROFILE%\\Documents\\WeChat Files\\Applet\\<appid>\\"
  echo "  或"
  echo "  %APPDATA%\\Tencent\\xwechat\\radium\\Applet\\packages\\"
  echo ""
  echo "提示: 先在 PC 微信中打开小程序，然后按修改时间排序查找最新的 .wxapkg 文件"
fi

echo ""
echo "=== 扫描完成，共找到 $found 个 wxapkg 文件 ==="
