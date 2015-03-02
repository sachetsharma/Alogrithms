/**
 * Created by sachet on 8/1/14.
 */
(function(){
    function Reverse()
    {
        if(typeof arguments[0] == 'string')
        {
            return reverseArray(arguments[0].split('')).join('');
        }
        if(typeof(arguments[0] == 'array'))
        {
            return reverseArray(arguments[0]);
        }

    }

    function reverseArray(pArray)
    {
        var start = 0 ,end = pArray.length-1;
        do
        {
            var temp = pArray[start];
            pArray[start] = pArray[end];
            pArray[end] = temp;
            start++;
            end--;
        }while(start < end)
        return pArray;
    }
    console.log(Reverse(['s','a','c','h','e','t',' ','s','h','a','r','m','a']));
    console.log(Reverse('sachet sharma'));

})();

terry.bay@tdameritrade.com

