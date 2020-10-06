# andreyamelchenia-NODEJS2020Q3

## 📦 Установка

```bash
npm install
```

## 🔨 Использование
### Запуск для test:
```bash
необходимо перейти в папку task1-caesar и запустить: 
npm test ("node my_caesar_cli -a encode -s 7 -i ./input.txt  -o ./output.txt")
```

<br>

### CLI tool принимает 4 options:
```bash
1.  -s, --shift: a shift number(7)
2.  -i, --input: an input file
3.  -o, --output: an output file
4.  -a, --action: an action encode/decode
```


## ✨ Особенности
+ **-s, --shift** и **-a, --action** - обязательны для ввода;
+  **-i, --input** - имеет default stdin и проверку на существование файла 
+ **-o, --output** - имеет default stdout и проверку на существование файла

## Примеры использования
+ **node my_caesar_cli -a encode -s 7 -i  -o ./output.txt** зайдет **stdin** и будет записывать в файл для выхода нажмите Ctrl + C
+ **node my_caesar_cli -a encode -s 7 -i  -o** зайдет **stdin** и будет выводить в **stdout** в файл для выхода нажмите Ctrl + C
+ **node my_caesar_cli -a encode -s 7 -i ./input.txt  -o** прочитает входной файл и будет выводить в **stdout** в файл для выхода нажмите Ctrl + C