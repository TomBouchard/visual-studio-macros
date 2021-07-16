# Visual Studio Macros

Custom macros I have created for the [Macros for Visual Studio extension](https://marketplace.visualstudio.com/items?itemName=VisualStudioPlatformTeam.MacrosforVisualStudio).

## Combine XML Comment Line
If I have already formatted my XML comments to be 80 characters wide, but then need to add more info, the line breaks will most likely need to be refactored. This macro is ment to simplify that process by easily combining XML comment lines. Run it when the cursor is on the line to be appended to the first line.
```
BEFORE:
/// <summary>This is an XML comment that spans multiple lines because it is
/// longer than eighty characters wide. Put the cursor on this line.</summary>
AFTER:
/// <summary>This is an XML comment that spans multiple lines because it is longer than eighty characters wide. Put the cursor on this line.</summary>
```

## Fix Common Lint Errors
When using code that has not been adapted to my coding standards there are often lots of errors the linter will pick up. This macro replaces any tabs with four spaces and removes any whitespace at the end of any line which are often major sources of errors.

## Replace Angle Brackets
Replaces < and > in the selected text with " to fix when the wrong type of #include is used. The user must select the block of text in which the replacement will be made before running the macro.
```
BEFORE:
#include <QtCore/qstringbuilder.h>
#include <QtWidgets/qapplication.h>
#include <QtWidgets/qmessagebox.h>
AFTER:
#include "QtCore/qstringbuilder.h"
#include "QtWidgets/qapplication.h"
#include "QtWidgets/qmessagebox.h"
```

## XML Comments
XML comments look terrible, but Visual Studio picks them up and puts them in tooltips/code hints so I like to use them. To use this macro, put the cursor within a function and the macro will add XML comments above the method declaration. The macro always adds the \<summary\> block, will add a \<param\> block with the parameter name for every parameter, and will add a \<returns\> block if the method is not void.
