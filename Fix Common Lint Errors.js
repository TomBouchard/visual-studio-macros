/// <reference path="C:\Users\TomBouchard\AppData\Local\Microsoft\VisualStudio\15.0_3b807522\Macros\dte.js" />
// Replaces any tabs with four spaces and removes any whitespace at the end of any line.

if (dte.UndoContext.IsOpen)
    dte.UndoContext.Close();

dte.UndoContext.Open("Fix Common Lint Errors");

// Replace tabs with spaces.
var useRegEx = 8;
dte.ExecuteCommand("Edit.SelectAll");
var replace = dte.ActiveDocument.Selection.ReplaceText("\t", "    ", useRegEx);

dte.ActiveDocument.Selection.StartOfDocument();
var currentLine = dte.ActiveDocument.Selection.CurrentLine;
var lastLine = 0;

// Delete all trailing whitespace.
while (lastLine != currentLine) {
    dte.ActiveDocument.Selection.EndOfLine();
    dte.ActiveDocument.Selection.DeleteWhitespace();
    dte.ActiveDocument.Selection.LineDown();
    lastLine = currentLine;
    currentLine = dte.ActiveDocument.Selection.CurrentLine;
}

dte.ActiveDocument.Save()

dte.UndoContext.Close();