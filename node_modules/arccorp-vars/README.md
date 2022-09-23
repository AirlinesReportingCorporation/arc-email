# ARC Variables

This repo contains resuable tokens and vars that should be installed and used in SASS files.

## Usage
In your SASS file, @import or @use the partial that you need.

```
@import "~arccorp-vars/src/scss/partials/colors.scss";
```

Or @use all vars using this:

```
@use "~arccorp-vars/src/scss/main.scss";
```

Please note that using @use requires the call to be above any other sass in the file. Refer to this [link here](https://sass-lang.com/documentation/at-rules/use).