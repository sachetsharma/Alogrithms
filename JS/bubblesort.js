/**
 * Created by sachet on 7/31/14.
 */
(function(){
    function bubblesort(pArray)
    {
            var swapped;
            var length = pArray.length;
            do
            {
                swapped = false;
                for(var i=0; i<length-1; i++)
                {
                    if(pArray[i] > pArray[i+1])
                    {
                        var temp = pArray[i];
                        pArray[i] = pArray[i+1];
                        pArray[i+1] = temp;
                        swapped = true;
                    }
                }
            }while(swapped);
    }
    var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
    bubblesort(a);
    console.log(a);
}
)();