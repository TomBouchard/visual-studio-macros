/// <reference path="C:\Users\TomBouchard\AppData\Local\Microsoft\VisualStudio\15.0_3b807522\Macros\dte.js" />
// When refactoring XML comments, this macro is used to combine lines. Run it when the cursor is on the line to be appended to the first line.

dte.ActiveDocument.Selection.StartOfLine(1);
dte.ActiveDocument.Selection.CharRight(false, 4);
dte.ActiveDocument.Selection.LineUp(true);
dte.ActiveDocument.Selection.EndOfLine(true);
Macro.InsertText(" ");
