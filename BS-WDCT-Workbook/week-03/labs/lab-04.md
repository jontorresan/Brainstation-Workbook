[Home](/README.MD) | [Week 1](../../week-01/ReadMe.md) | [Week 2](../../week-02/ReadMe.md) | [Week 3](../../week-03/ReadMe.md) | [Week 4](../../week-04/ReadMe.md) | [Week 5](../../week-05/ReadMe.md) | [Week 6](../../week-06/ReadMe.md) | [Week 7](../../week-07/ReadMe.md) | [Week 8](../../week-08/ReadMe.md) | [Week 9/10](../../week-09_10/ReadMe.md)

Labs: [1](./lab-01.md) | [2](./lab-02.md) | [3](./lab-03.md) | 4 | [5](./lab-05.md) | [6](./lab-06.md) | [7](./lab-07.md) | [8](./lab-08.md) | [9](./lab-09.md)

---

# Week 3 > Lab 4

### More Asynchronous Node

#### Introduction

File I/O is the ultimate CPU block. Large files can create long block threads that are waiting for the file to be read by the program. In the meantime, all other possible input requests or outputs of data must wait until the file is read. NodeJS uses its "asynchronous-ness" to get around this problem.

In this lab, we will use NodeJS and the file system module to read and write files using asynchronous methods.

#### Instructions

In this exercise, you are going to write a program that reads files and change the words that start with "b" to "BrainStation". You will write a Node JavaScript file that reads a file, modifies the content of the file, and writes the modified content to another file. You will need to understand the asynchronous nature of this operation in order to successfully finish the exercise.

In the resources directory there is a file called ['quote.txt'](../../public/resources/week-03/quote.txt). Save the contents of the file to your labs directory. In your labs directory, create a javascript file called `index.js`

Write a function that reads the `quote.txt` file and manipulates the file content as the following:

- find all words that start with "b" (for both uppercase and lowercase). Hint try using [indexOf](https://www.w3schools.com/jsref/jsref_indexof.asp)
- change all of them to "BrainStation"
- Create a new file with the manipulated content.

### Diving Deeper

Let's make our file I/O more efficient! We will perform the task of file compression. File compression is a very common way to reduce the size of a file, while still preserving its content.

We will write a JavaScript app with a compression and decompression method that can:

- Save a copy of an original file in a compressed state in your folder (you could add the extension 'cmp' to the filename for the compressed file. e.g 'filename.txt.cmp')
    - How will your program recognize whether a file is compressed already or not? You could look for the extension (e.g cmp), or you could include a 'doctype'-like statement at the start of your file, something like `[compressed]` so that your program knows that if it sees that string, the file is compressed. If it doesn't it will assume the file is not compressed and compress the contents. If it sees the `[compressed]` string, it can assume the file is already compressed, and decompress the file.
- Decompress the compressed file to its previous form. Use a strategy from above to tell whether or not a file has already been compressed.
- The original file and decompressed file must look the same

As an example, we will perform a simple compression task using ASCII art. ASCII Art is a way of drawing images using only the keyboard characters like so:

```
   *
  ***
*******
  ***
   *
```

Compression for ASCII art works by specifying the number of characters that should be outputted in each line. A compressed version of the above diamond would be a file that looks like so:

```
3 1*
2 3*
7*
2 3*
3 1*
```

Compressing files like this is the premise behind technologies such as MP3s and images such as PNG/JPG/GIF. When we have scenarios with a lot of data that is repeated, we can take advantage of that repetition to compress the data.

The above reads as 3 blank spaces followed by 1 star, then 2 blank spaces followed by 3 stars, 7 stars, 2 blank spaces followed by 3 stars, and finally 3 blank spaces followed by a star. The first file would contain 25 characters while the second would only contain 18. A small savings of size, but ASCII art can get quite large, like this one:

```
                                        .,,cccd$$$$$$$$$$$ccc,
                                     ,cc$$$$$$$$$$$$$$$$$$$$$$$$$cc,
                                   ,d$$$$$$$$$$$$$$$$"J$$$$$$$$$$$$$$c,
                                 d$$$$$$$$$$$$$$$$$$,$" ,,`?$$$$$$$$$$$$L
                               ,$$$$$$$$$$$$$$$$$$$$$',J$$$$$$$$$$$$$$$$$b
                              ,$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i `$h
                              $$$$$$$$$$$$$$$$$$$$$$$$$P'  "$$$$$$$$$$$h $$
                             ;$$$$$$$$$$$$$$$$$$$$$$$$F,$$$h,?$$$$$$$$$$h$F
                             `$$$$$$$$$$$$$$$$$$$$$$$F:??$$$:)$$$$P",. $$F
                              ?$$$$$$$$$$$$$$$$$$$$$$(   `$$ J$$F"d$$F,$F
                               ?$$$$$$$$$$$$$$$$$$$$$h,  :P'J$$F  ,$F,$"
                                ?$$$$$$$$$$$$$$$$$$$$$$$ccd$$`$h, ",d$
                                 "$$$$$$$$$$$$$$$$$$$$$$$$",cdc $$$$"
                        ,uu,      `?$$$$$$$$$$$$$$$$$$$$$$$$$$$c$$$$h
                    .,d$$$$$$$cc,   `$$$$$$$$$$$$$$$$??$$$$$$$$$$$$$$$,
                  ,d$$$$$$$$$$$$$$$bcccc,,??$$$$$$ccf `"??$$$$??$$$$$$$
                 d$$$$$$$$$$$$$$$$$$$$$$$$$h`?$$$$$$h`:...  d$$$$$$$$P
                d$$$$$$$$$$$$$$$$$$$$$$$$$$$$`$$$$$$$hc,,cd$$$$$$$$P"
            =$$?$$$$$$$$P' ?$$$$$$$$$$$$$$$$$;$$$$$$$$$???????",,
               =$$$$$$F       `"?????$$$$$$$$$$$$$$$$$$$$$$$$$$$$$bc
               d$$F"?$$k ,ccc$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i
        .     ,ccc$$c`""u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$P",$$$$$$$$$$$$h
     ,d$$$L  J$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$" `""$$$??$$$$$$$
   ,d$$$$$$c,"$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$F       `?J$$$$$$$'
  ,$$$$$$$$$$h`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$F           ?$$$$$$$P""=,
 ,$$$F?$$$$$$$ $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$F              $$$$$II"?$h,
 $$$$$`$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$P"               ;$$$??$$$,"?"
 $$$$F ?$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$P",z'                $$$h   ?$F
        `?$$$$$$$$$$$$$$$??$$$$$$$$$PF"',d$P"                  "?$F
           """""""         ,z$$$$$$$$$$$$$P
                          J$$$$$$$$$$$$$$F
                         ,$$$$$$$$$$$$$$F
                         :$$$$$c?$$$$PF'
                         `$$$$$$$P
                          `?$$$$F                   
```

You can test your compression app by compressing this image as well as the two images below (Copy and save them as .txt files):

```
   *
  ***
*******
  ***
   *
```

```
               \ .-.  ___  __|_|  
    .-.__'--.-.-(   \/\;;\_\.-._______.-.
    (-)___     \ \ .-\ \;;\(   \       \ \
     Y    '---._\_((Q)) \;;\\ .-\     __(_)
     I           __'-' / .--.((Q))---'    \,
     I     ___.-:    \|  |   \'-'_          \
     A  .-'      \ .-.\   \   \ \ '--.__     '\
     |  |____.----((Q))\   \__|--\_      \     '
        ( )        '-'  \_  :  \-' '--.___\
         Y                \  \  \       \(_)
         I                 \  \  \         \,
         I                  \  \  \          \
         A                   \  \  \          '\
         |              snd   \  \__|           '
                               \_:.  \
                                 \ \  \
                                  \ \  \
                                   \_\_|
```                                   

---
[Week 3 Home](../ReadMe.md) | [Go to Lab 5 >>](./lab-05.md)
