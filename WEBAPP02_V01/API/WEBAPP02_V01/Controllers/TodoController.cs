using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;

namespace WEBAPP02_V01.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class TodoController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public TodoController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("get_tasks")]
        public async Task<JsonResult> Get_tasks()
        {
            string query = "SELECT * FROM todo ORDER BY id";
            
            DataTable table = new DataTable();
            SqlDataReader myReader;

            string SqlDataSource = _configuration.GetConnectionString("mydb");

            using (SqlConnection myCon = new SqlConnection(SqlDataSource))
            {
                await myCon.OpenAsync();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    using (myReader = await myCommand.ExecuteReaderAsync())
                    {
                        table.Load(myReader);
                    }
                }
            }
            return new JsonResult(table);
        }


        [HttpPost("add_task")]
        public async Task<JsonResult> Add_task([FromForm] string task)
        {
            string query = "INSERT INTO todo (task, date_created, last_modified) VALUES (@task, @date_created, @last_modified)";

            string SqlDataSource = _configuration.GetConnectionString("mydb");

            using (SqlConnection myCon = new SqlConnection(SqlDataSource))
            {
                await myCon.OpenAsync();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@task", task);
                    // Set the current date and time for both date_created and last_modified
                    myCommand.Parameters.AddWithValue("@date_created", DateTime.Now);
                    myCommand.Parameters.AddWithValue("@last_modified", DateTime.Now);
                    await myCommand.ExecuteNonQueryAsync();
                }
            }

            // Return the success message along with the updated tasks
            var updatedTasks = await Get_tasks();
            return new JsonResult(new { message = "Added Successfully", tasks = updatedTasks.Value });
        }

        [HttpPost("update_task")]
        public async Task<JsonResult> Update_task([FromForm] string id, [FromForm] string task)
        {
            string query = "UPDATE todo SET task = @task, last_modified = @last_modified WHERE id = @id";

            string SqlDataSource = _configuration.GetConnectionString("mydb");

            using (SqlConnection myCon = new SqlConnection(SqlDataSource))
            {
                await myCon.OpenAsync();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    myCommand.Parameters.AddWithValue("@task", task);
                    // Set the current date and time for last_modified
                    myCommand.Parameters.AddWithValue("@last_modified", DateTime.Now);
                    await myCommand.ExecuteNonQueryAsync();
                }
            }

            // Return the success message along with the updated tasks
            var updatedTasks = await Get_tasks();
            return new JsonResult(new { message = "Updated Successfully", tasks = updatedTasks.Value });
        }

        [HttpPost("delete_task")]
        public async Task<JsonResult> Delete_task([FromForm] string id)
        {
            string query = "DELETE FROM todo WHERE id = @id";

            string SqlDataSource = _configuration.GetConnectionString("mydb");

            using (SqlConnection myCon = new SqlConnection(SqlDataSource))
            {
                await myCon.OpenAsync();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);
                    await myCommand.ExecuteNonQueryAsync();
                }
            }

            // Return the success message along with the updated tasks
            var updatedTasks = await Get_tasks();
            return new JsonResult(new { message = "Deleted Successfully", tasks = updatedTasks.Value });
        }
    }
}
