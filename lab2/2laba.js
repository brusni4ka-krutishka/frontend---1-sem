function two() {
	const a = +prompt("Введите а: "),
		b = +prompt("Введите b: ");

	document.write("<table>");

	for (let i = 1; i <= a; i++) {
		document.write("<tr>");
		for (let j = 1; j <= b; j++) {
			document.write("<td>");
			document.write(`${i * j} `);
			document.write("</td>");
		}
		document.write("</tr>");
	}

	document.write("</table>");
}
