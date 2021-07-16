/// <reference path="C:\Users\TomBouchard\AppData\Local\Microsoft\VisualStudio\15.0_3b807522\Macros\dte.js" />
// Replaces < and > in the selected text with " to fix when the wrong type of #include is used.

if (dte.ActiveDocument.Selection.Text != "") {

    if (dte.UndoContext.IsOpen)
        dte.UndoContext.Close();

    dte.UndoContext.Open("Replace Angle Brackets");

    var useRegEx = 8;
    var replace = dte.ActiveDocument.Selection.ReplaceText("[<>]", "\"", useRegEx);

    dte.UndoContext.Close();
}