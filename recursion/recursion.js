/*
Estimated time: 5hrs

Write a recursive method, range, that takes a start and an end and returns an array of all numbers between.
Write both a recursive and iterative version of sum of an array.
Write two versions of exponent that use two different recursions:
# this is math, not Ruby methods.

# recursion 1
exp(b, 0) = 1
exp(b, n) = b * exp(b, n - 1)

# recursion 2
exp(b, 0) = 1
exp(b, n) = exp(b, n / 2) ** 2             [for even n]
exp(b, n) = b * (exp(b, (n - 1) / 2) ** 2) [for odd n]
Note that for recursion 2, you will need to square the results of exp(b, n / 2) and (exp(b, (n - 1) / 2). Remember that you don't need to do anything special to square a number, just calculate the value and multiply it by itself.

If the n == 256, about how many nested recursive steps will we run in the first case?

How deep will we need to recurse for the second? Keep in mind that the first reduces the exponent by one for each recursion, while the second reduces it by half. Even if we don't recurse as deeply, do we call exp using recursion 2 less often than using recursion 1?

The #dup method doesn't make a deep copy:
robot_parts = [["nuts", "bolts", "washers"], ["capacitors", "resistors", "inductors"]]
robot_parts_copy = robot_parts.dup

# shouldn't modify robot_parts
robot_parts_copy[1] << "LEDs"
# wtf?
robot_parts[1] # => ["capacitors", "resistors", "inductors", "LEDs"]
When we dup an Array, it creates a new array to hold the elements, but doesn't recursively dup any arrays contained therein. So the dup method creates one new array, but just copies over references to the original interior arrays.

Using recursion and the is_a? method, write a new deep_dup method that will perform a "deep" duplication of the interior arrays.

You may use dup in your deep_dup method, but it shouldn't be strictly necessary. It's okay to iterate over array elements using each for this one.

You should be able to handle "mixed" arrays like [1, [2], [3, [4]]].

Write a recursive and an iterative Fibonacci method. The method should take in an integer n and return the first n Fibonacci numbers in an array.

You shouldn't have to pass any arrays between methods; you should be able to do this just passing a single argument for the number of Fibonacci numbers requested.

Write a recursive binary search: bsearch(array, target). Note that binary search only works on sorted arrays. Make sure to return the location of the found object (or nil if not found!). Hint: you will probably want to use subarrays.

RubyQuiz: Make change (mirror)

Whenever we assign a Ruby Quiz, after solving it, make sure to look at a couple answers and make sure you understand them.
Start out by solving the problem for sensible currencies like [25, 10, 5, 1]. Bonus: solve the problem for currencies like [10, 7, 1].
Implement a method, merge_sort that sorts an Array. Hint: The base case for this sort is surprisingly simple.

Write a method, subsets, that will return all subsets of an array.

subsets([]) # => [[]]
subsets([1]) # => [[], [1]]
subsets([1, 2]) # => [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) # => [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
# can also implement as an instance method
*/
