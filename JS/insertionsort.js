/**
 * Created by sachet on 7/31/14.
 */
var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

(function(){

    function insertionSort(pArray)
    {
        var value, arrayLength, sortedIndex, unsortedIndex,counter=0;
        arrayLength = pArray.length;
        for(unsortedIndex=0; unsortedIndex<arrayLength; unsortedIndex++)
        {
            counter++;
            value = pArray[unsortedIndex];
            for(sortedIndex=unsortedIndex-1; sortedIndex>-1 && pArray[sortedIndex] > value; sortedIndex--)
            {
                pArray[sortedIndex+1] = pArray[sortedIndex];
                counter++;
            }
            pArray[sortedIndex+1] = value;
        }
        console.log(pArray,counter);
    }
    insertionSort(a);

})();