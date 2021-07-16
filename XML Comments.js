/// <reference path="C:\Users\TomBouchard\AppData\Local\Microsoft\VisualStudio\15.0_3b807522\Macros\dte.js" />
// Starting within a function adds XML comments above the method declaration.

var textSelection = dte.ActiveDocument.Selection;

// Define Visual Studio constants
var vsCMElementFunction = 2;
var vsCMPartHeader = 4;

var codeElement = textSelection.ActivePoint.CodeElement(vsCMElementFunction);

if (codeElement != null) {
    if (dte.UndoContext.IsOpen) {
        dte.UndoContext.Close();
    }
    dte.UndoContext.Open("Add XML Comments");
    try {
        textSelection.MoveToPoint(codeElement.GetStartPoint(vsCMPartHeader));
    } catch (error) {
        // Ignore errors.
    }
    dte.ActiveDocument.Selection.StartOfLine(1);
    dte.ActiveDocument.Selection.EndOfLine(true);
    var re = / /;
    isConstructorOrDestructor = !re.test(dte.ActiveDocument.Selection.Text);
    re = /^void /;
    isVoid = re.test(dte.ActiveDocument.Selection.Text);
    re = /^virtual void /;
    isVirtualVoid = re.test(dte.ActiveDocument.Selection.Text);
    dte.ActiveDocument.Selection.StartOfLine(1);

    dte.ActiveDocument.Activate();
    Macro.InsertText("/// <summary></summary>");
    var paramCount = 0;
    if (codeElement.Parameters != null) {
        paramCount = codeElement.Parameters.Count;
        for (var i = 1; i <= paramCount; ++i) {
            //textSelection.MoveToPoint(codeElement.Parameters.Item(i).GetEndPoint());
            dte.ActiveDocument.Selection.NewLine();
            Macro.InsertText("/// <param name=\"");
            Macro.InsertText(codeElement.Parameters.Item(i).Name);
            Macro.InsertText("\"></param>")
        }
    }
    if (!isConstructorOrDestructor && !isVoid && !isVirtualVoid) {
        dte.ActiveDocument.Selection.NewLine();
        Macro.InsertText("/// <returns></returns>");
        ++paramCount;
    }
    dte.ActiveDocument.Selection.NewLine();
    dte.ActiveDocument.Selection.LineUp(false, paramCount + 1);
    dte.ActiveDocument.Selection.CharRight(false, 13);
    dte.UndoContext.Close();
}
