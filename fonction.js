
//##Exercice 1 Faire une fonction qui retourne true.
// <input type="button" value ="Exercice 1" onclick="myFunction1()">


function mytrue()
{
  return  alert(true);
}mytrue()
//##Exercice 2 Faire une fonction qui prend en paramètre une chaine de caractères et qui retourne cette même chaine.
function retourne_une_chaine(x)
{
  return  alert(x);
}retourne_une_chaine(prompt("Please enter une chaine de caractères "))  
//##Exercice 3 Faire une fonction qui prend en paramètre deux chaines de caractères et qui revoit la concaténation de ces deux chaines
function retourne_deux_chaine(a,y)
{
  return  alert(a+ "   "+y);
}retourne_deux_chaine(prompt("Please enter para chaine de caractères "),prompt("Please enter de chaine de caractères "))
/*
##Exercice 4 Faire une fonction qui prend en paramètre deux nombres. La fonction doit retourner :

    Le premier nombre est plus grand si le premier nombre est plus grand que le deuxième
    Le premier nombre est plus petit si le premier nombre est plus petit que le deuxième
    Les deux nombres sont identiques si les deux nombres sont égaux
*/

function deux_nombres()
{
  var x=prompt("le premier nombre");
  var y =prompt("le deuxième nombre");
  if (x>y) 
  {
    return  alert("Le premier nombre est plus grand");
  }
	  if (x<y)
	   {
	   	return  alert("Le premier nombre est plus petit");
	   }
		    if (x==y)
		   {
		   	return  alert("Les deux nombres sont identiques");
		   }

}deux_nombres();

/*
##Exercice 5 Faire une fonction qui prend en paramètre un nombre et
une chaine de caractères et qui renvoit la concaténation de ces deux paramètres.
*/
function deux_nombres(x, y)
{
	return  alert("le nombre = "+x+"\n la chaine = "+y)
}
deux_nombres(prompt("parametre un nombre"),prompt("parametre une chaine"));
/*
##Exercice 6 Faire une fonction qui prend trois paramètres : nom, prenom et age. Elle doit renvoyer une chaine de la forme :
"Bonjour" + nom + prenom + ",tu as" + age + "ans".
*/
function trois_nombres(x,y,z)
{
	return  alert(" Bonjour " + x +" "+ y + "  ,tu as " + z + " ans")
}trois_nombres(prompt("Enter nom"),prompt("Enter prenom"),prompt("Enter age"));
/*
##Exercice 7 Faire une fonction qui prend deux paramètres : age et genre. Le paramètre genre peut prendre comme valeur :

    Homme
    Femme

La fonction doit renvoyer en fonction des paramètres :

    Vous êtes un homme et vous êtes majeur
    Vous êtes un homme et vous êtes mineur
    Vous êtes une femme et vous êtes majeur
    Vous êtes une femme et vous êtes mineur

Gérer tous les cas.
*/

function genre(x,y)
{
	// return  alert(" Bonjour " + x +" "+ y + "  ,tu as " + z + " ans")
	if (y=="homme") 
	{
		if (x>=18)
		{
         return  alert("Vous etes un homme et vous etes majeur ")
		}
	}
		if (y=="homme") 
	    {
			if (x<18)
			{
	         return  alert("Vous etes un homme et vous etes mineur ")
			}
	    }
	    	if (y=="femme") 
			{
				if (x>=18)
				{
		         return  alert("Vous etes une femme et vous etes majeur ")
				}
			}
	            if (y=="femme") 
				{
					if (x<18)
					{
			         return  alert("Vous etes une femme et vous etes mineur ")
					}
				}
}genre(prompt("Insert age"),prompt("Insert genre ! homme ou femme "));
/*
##Exercice 8 Faire une fonction qui prend en paramètre trois nombres et qui renvoit la somme de ces nombres.
*/
function deux_nombres(x,y,z)
{
	var result = parseInt(x) + parseInt(y) + parseInt(z);
	return  alert("la somme de ces nombres = "+result)
}
deux_nombres(prompt("nombre 1"),prompt("nombre 2"),prompt("nombre 3"));