function login()
{
  let u=username.value
  let p=pw.value
  if(u == "tuyetnhung" && p == "2204")
  {
    window.open("home.html")
    document.getElementById(compiler).style.display="block"
  }
}
