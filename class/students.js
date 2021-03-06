/*

Students and Courses

Write a set of classes to model Students and Courses.

Student#initialize should take a first and last name.
Student#name should return the concatenation of the student's first and last name.
Student#courses should return a list of the Courses in which the student is enrolled.
Student#enroll should take a Course object, add it to the student's list of courses, and update the Course's list of enrolled students.
enroll should ignore attempts to re-enroll a student
Student#course_load should return a hash of departments to # of credits the student is taking in that department
Course#initialize should take the course name, department, and number of credits.
Course#students should return a list of the enrolled students
Course#add_student should add a student to the class
It should protect against enrolling twice
And some extras:

Each course should also take a set of days of the week (:mon, :tue, ...), plus a time block (assume each day is broken into 8 consecutive time blocks). So a course could meet [:mon, :wed, :fri] during block #1.
Update your #initialize method to also take a time block and days of the week.
Write a method Course#conflicts_with? which takes a second Course and returns true if they conflict.
Update Student#enroll so that you raise an error if a Student enrolls in a new course that conflicts with an existing course time.
*/
