# JavaScript Dev Env Boilerplace

This boilerplate should work for pretty much any of the common IDEs. Please note that this boilerplate revolves around VSCode, so there might be some VSCode specific comments dotted around :)


## Pieces of the puzzle

This section will briefly explain the different elements of the boilerplate, along with any considerations along the way


### Editor configuration

The editor config file is set to:
    - Indent with 4 spaces
    - Use LF as the EOL character
    - Use the UTF-8 charset
    - Trim trailing whitespace (unless it's a .md file)
    - Insert a new line at the end of the file

#### Notes

The list of supported IDEs can be found on the [EditorConfig website][ec-website]. Please ensure that you have the correct plugin for the edit you are using, if required.


### Package Manager

This boilerplate is built with npm in mind. Sorry yarn users!


### Package Security

[Node Security Platform][nsc-website] will be used in order to uphold security around any dependencies used - anybody can add packages to npm after all. This will be checked at run time and will need an active internet connection to perform the check.

In the future, alternative scripts (probably suffixed with -noNSP) will be made available to skip the security check in case you do not have an active internet connection.


### Linting

ESLint has been chosen as the linter here, and is using the [ESLint Recommended rule set][eslint-rules].

Plugins for import warnings and errors are used to help identify any problems with importing early on. ES7 (ECMAScript 2016) has been set and standard JavaScript modules are set in the parser options.

Finally, 'no-console' has been set to 1 in order to warn against console logging (rather than the default of erroring in the ESLint Recommended rules). Console.log does have its place.

#### Notes

If you're having any issues with the linting rules, please ensure that any linting plugins for your IDE are disabled, as this can cause ESLint some confusion.


[//]: # (Reference links)

[ec-website]: <http://editorconfig.org/#download>
[nsc-website]: <https://nodesecurity.io/>
[eslint-rules]: https://eslint.org/docs/rules/
