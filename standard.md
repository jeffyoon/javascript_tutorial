#Javascript Standard Coding Style.

##Install
1. Install standard npm package.
   ```
   npm install standard -g
   ```
   
2. Install standard-format npm package.
   ```
   npm install standard-format -g
   ```
   
##Usage
After you've installed `standard`, you should be able to use the `standard` program.
The simplest use case would be checking the style of all Javascript files in the current working directory.
You can optionally pass in a directory (or directories) using a **glob pattern**.
Be sure to quote paths containing glob patterns so that they are expanded by `standard` instead of your shell.
```
$ standard
or 
$ standard "src/util/**/*.js" "test/**/*.js"
```

##Text editor plugins
First, install `standard`. Then, install the appropriate plugin for your editor.

**Sublime Text**
Using **Pakage Control**, install **SublimeLinter** and **SublimeLinter-contrib-standard**.
For automatic formatting on save, install **[StandardFormat]**(https://packagecontrol.io/packages/StandardFormat)
