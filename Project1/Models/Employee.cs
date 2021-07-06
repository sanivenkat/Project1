using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;


namespace Project1.Models
{
    public class Employee
    {
        [Key]
        public int EmpNo { get; set; }
        public string EmpName { get; set; }
        public double Sal { get; set; }
        public int DeptNo { get; set; }

    }
}
