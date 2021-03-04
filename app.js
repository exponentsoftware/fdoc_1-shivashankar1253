const str = "I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love.";
function countWords(str){
   const strArr = str.split(" ");
   console.log(strArr)
   const res = [];
   for(let i = 0; i < strArr.length; i++){
      if(strArr.indexOf(strArr[i]) !== strArr.lastIndexOf(strArr[i])){
         if(!res.includes(strArr[i])){
            res.push(strArr[i]);
         };
      };
   };
   return res.join(" ");
};
console.log(countWords(str));

