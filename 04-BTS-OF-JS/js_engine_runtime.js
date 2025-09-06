// *************** RUNTIME OF JS *************

// JS ENGINE : program that executes js code eg. google's v8
// Every engine has it own CALL STACK and HEAP
// CALL STACK is where our code in executed in execution context
// HEAP is where our all objects are stored (all objects in memory )

// COMPILATION (compiler) : This involves two steps
// 1.) The whole code is first converted into machine language
// 2.) The code is then executed afterwards this can happen way after conversion

//INTERPRETATION (interpreter): In this method code is converted  and executed line by line and it is much slower then compilation

// JS used to be a interpreteted lang but now with mordern js it uses mix of both called JUST-IN-TIME complilation
// JIT : The entire code is converted at once and then executed immediately

// STEPS INVOLVED IN JS ENGINE
// 1.) FIRST THE CODE IS PARSED (READ) INTO A DATA STRUCTURE CALL ABSTRACT SYNTAX TREE
// 2.) SECOND AST IS TAKEN AND COMPILED INTO MACHINE LANGUAGE CODE
// 3.) IN BETWEEN OPTIMIZATION KEEPS ON HAPPENING
// 3.) THEN IT IS EXECUTED STRAIGHT AWAY
