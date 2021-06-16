<?php  
 $connect = mysqli_connect("localhost", "root", "", "database_development");  
 $output = '';  
 $sql = "SELECT * FROM users";  
 $result = mysqli_query($connect, $sql);  
 $output .= '  
      <div class="table-responsive">  
           <table class="table table-bordered table-striped">  
                <tr>  
                     <th width="10%">Id</th>  
                     <th width="40%">UserName</th>  
                     <th width="40%">Email</th> 
                     <th width="40%">Password</th> 
                     <th width="40%">Role</th>  
                     <th width="10%">Delete</th>  
                </tr>';  
 if(mysqli_num_rows($result) > 0)  
 {  
      while($row = mysqli_fetch_array($result))  
      {  
           $output .= '  
                <tr>  
                     <td>'.$row["id"].'</td>  
                     <td class="username" data-id1="'.$row["id"].'" contenteditable>'.$row["username"].'</td>  
                     <td class="email" data-id2="'.$row["id"].'" contenteditable>'.$row["email"].'</td>
                     <td class="password" data-id3="'.$row["id"].'" contenteditable>'.$row["password"].'</td>  
                     <td class="role" data-id4="'.$row["id"].'" contenteditable>'.$row["role"].'</td>      
                     <td><button type="button" name="delete_btn" data-id5="'.$row["id"].'" class="btn btn-xs btn-danger btn_delete">X</button></td>  
                </tr>  
           ';  
      }  
      $output .= '  
           <tr>  
                <td></td>  
                <td id="username" contenteditable></td>  
                <td id="email" contenteditable></td>  
                <td id="password" contenteditable></td> 
                <td id="role" contenteditable></td> 
                <td><button type="button" name="btn_add" id="btn_add" class="btn btn-xs btn-success">+</button></td>  
           </tr>  
      ';  
 }  
 else  
 {  
      $output .= '<tr>  
                          <td colspan="4">Data not Found</td>  
                     </tr>';  
 }  
 $output .= '</table>  
      </div>';  
 echo $output;  
 ?>