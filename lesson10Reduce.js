// Reduce
// У вас несортированный массив есть массив с уведомлениями:
//
//     var notification = [
//
//         {
//
//             date: '31/07/2019',
//
//             msg: 'Some message here'
//
//         },
//
//         ...
//
//     ];
// Вам нужно написать функцию, которая отсортирует и оптимизирует
// представление для вывода уведомлений и создаст новый массив,
// где сообщения будут сгруппированы по времени получения

var notifications = [
    {
        date: '31/07/2019',
        msg: 'fill in form'
    },
    {
        date: '08/08/2019',
        msg: 'check statement'
    },
    {
        date: '25/07/2019',
        msg: 'code'
    },
    {
        date: '28/07/2019',
        msg: 'write letter'
    },
    {
        date: '25/07/2019',
        msg: 'read book'
    },
    {
        date: '28/07/2019',
        msg: 'massage'
    },
    {
        date: '28/06/2019',
        msg: 'send massege'
    }
    ];

function compare(someArray) {
    someArray.sort(function (a,b) {
        var dateA = a.date.split('/').reverse().join('');
        var dateB = b.date.split('/').reverse().join('');
        if (dateA<dateB)
            return -1;
        if (dateA>dateB)
            return 1;
        return 0;
    });
}

compare(notifications);

function group(data) {
    return data.reduce(function (result, notification) {
        if (!result.length || result[result.length-1].title !== notification.date){
            var arr = [];
            arr.push(notification.msg);

            var obj = {
                title:notification.date,
                action: arr
            };

            result.push(obj);
        }else {
            result[result.length-1].action.push(notification.msg);
        }
        return result;

    }, []);
}

console.log(group(notifications));















