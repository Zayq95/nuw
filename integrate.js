const fs = require('fs');

// 读取文件内容
const htmlContent = fs.readFileSync('index.html', 'utf8');
const cssContent = fs.readFileSync('style.css', 'utf8');
const jsContent = fs.readFileSync('script.js', 'utf8');

// 替换HTML中的外部引用
let integratedHtml = htmlContent;

// 替换CSS引用
integratedHtml = integratedHtml.replace(
    '<link rel="stylesheet" href="style.css">',
    `<style>
${cssContent}
</style>`
);

// 替换JavaScript引用
integratedHtml = integratedHtml.replace(
    '<script src="script.js"></script>',
    `<script>
${jsContent}
</script>`
);

// 写入整合后的文件
fs.writeFileSync('integrated.html', integratedHtml);

console.log('整合完成！已生成integrated.html文件');
