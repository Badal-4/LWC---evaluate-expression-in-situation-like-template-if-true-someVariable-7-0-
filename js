We cant add expressions directly in html file rather what we can do is create getter which will evaluate value for us which we can use in html like below : 
get isMod7() { return this.index % 7 == 0; }
<template if:true ={isMod7}
