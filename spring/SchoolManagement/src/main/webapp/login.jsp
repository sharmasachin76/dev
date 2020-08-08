<html>
<body>
Hi <%=request.getAttribute("loginName") %> Welcome to site


<form action="view" method="post">
<input type="text" name="list">
<input type=submit name="view">
</form>
</body>
</html>
