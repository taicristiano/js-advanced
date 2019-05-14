function Student()
{
    this.name = '';
    this.age = '';

    this.showInfo = function()
    {
        console.log(this.name);
        // TaiNhot
        console.log(this.age);
        //27
    };
}

// Khởi tạo đối tượng
var student = new Student();

// Gán giá trị cho các thuộc tính
student.name = 'TaiNhot';
student.age = '27';

// Hiển thị thông tin
student.showInfo();




// example 2
function Student()
{
    this.name = '';
    this.age = '';

    // Log1
    console.log(this);
    // Student {name: "", age: ""}

    this.showInfo = function()
    {
        // Log2
        console.log(this);
        // Student {name: "TaiNhot", age: "27", showInfo: ƒ}

    };
}

// Khởi tạo đối tượng
var student = new Student();

// Gán giá trị cho các thuộc tính
student.name = 'TaiNhot';
student.age = '27';

// Hiển thị thông tin
student.showInfo();




// ex3

<!DOCTYPE html>
<html>
    <head>
        <title>Từ khóa this trong thẻ HTML</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script language="javascript">
            function showMessage(obj)
            {
                console.log(obj);
                //<input type="button" id="clickme" onclick="showMessage(this)" value="Click Me" />

                console.log(obj.value);
                //Click Me
            }
        </script>
    </head>
    <body>
        <input type="button" id="clickme" onclick="showMessage(this)" value="Click Me" />
    </body>
</html>
