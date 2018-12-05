# How To Surge Web Publishing
Surge is a simple and quick way to deply your static pages.

## Step 1 - Installing Node.js:

- Go to [Node.js webpage](https://nodejs.org/en/) and download the latest version of Node.js
( *Don't worry about Node.js for now, we will get into Node on week 3 and 4.*
- Go through the installation process.
- Make sure you have Node.js installed by running `node -v` on your terminal.

## Step 2 - Installing Surge:
- Install surge running the following command on your terminal. 
`npm install --global surge`

* In case you get a error saying `Error: EACCES: permission denied, access '/usr/local/lib/node_modules'` use sudo:
`sudo npm install --global surge`

## Step 3 - Deploying:

- Navigate to your folder directory on your terminal. 
( *if you need to refresh your memory on how to do that check the [how to for CLI](./cli.md)* )
- Run surge from your project directory.
`surge`
- Follow the instructions.
- After following all the instructions, you should be able to get your project URL like this:
![Surge Example](../../public/img/surge.png).

## Step 4 - Making changes:

- Everytime you make a change on your project you need to run surge again to update your URL same as *step 3*


#### Resouces
- [Surge Documentation](https://surge.sh/help/getting-started-with-surge)

