function Main()
{
	xsh.Session.Open("C:\\Users\\...\\localhost.xsh");
	xsh.Screen.Synchronous = true;
	xsh.Session.Sleep(1000);
	
	//*** WaitForString ***
	xsh.Screen.WaitForString("aaa");		// input "aaa" in Terminal
	
	//*** Send ***
	xsh.Screen.Send("cat /etc/passwd");
	xsh.Screen.Send(String.fromCharCode(13));
	xsh.Session.Sleep(1000);
	
	//*** Get, Clear ***
	var ScreenRow, ReadLine, Items;
	
	ScreenRow = xsh.Screen.CurrentRow - 1;
	ReadLine = xsh.Screen.Get(ScreenRow, 1, ScreenRow, 40);
	Items = ReadLine.split(":");
	xsh.Dialog.MsgBox(Items);
	xsh.Screen.Clear();
	
	//*** Property ***
	xsh.Screen.Synchronous = false;
	var MsgProp;
	MsgProp = "Col:" + xsh.Screen.CurrentColumn + "\n";
	MsgProp = MsgProp + "Row:" + xsh.Screen.CurrentRow + "\n";
	MsgProp = MsgProp + "TermCol:" + xsh.Screen.Columns + "\n";
	MsgProp = MsgProp + "TermRow:" + xsh.Screen.Rows; 
	xsh.Dialog.MsgBox(MsgProp);
}