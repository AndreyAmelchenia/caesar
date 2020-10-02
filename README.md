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
+  **-i, --input** - имеет default input.txt и проверку на существование файла 
+ **-o, --output** - имеет default output.txt и проверку на существование файла
