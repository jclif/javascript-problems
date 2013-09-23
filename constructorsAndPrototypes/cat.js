 /*Cat class
The constructor method should take a name and owner.
It should save these in attributes of the object.
Write a Cat#cuteStatement method that returns "[owner] loves [name]".
#cuteStatement should be defined on the prototype.
Prototypes example:
Create several Cats, test out their cuteStatement method.
Reset the Cat.prototype.cuteStatement method with a function that returns "everyone loves [name]!"
Run Cat#cuteStatement on your old cats; the new method should be invoked.
Add a Cat#meow method to the Cat prototype. You can now call meow on your previously constructed Cats.
Take one of your cats and set the meow property on the instance (cat1.meow = function () { ... }. Call meow on this Cat instance; call meow on any other cat. The other cats should continue to use the original method.
Note that it is pretty unusual to add a method directly to an instance like this; normally we would add methods to the prototype.
This exercise is more to help you understand the idea of the prototype-chain and how JS recursively searches for methods.
*/
