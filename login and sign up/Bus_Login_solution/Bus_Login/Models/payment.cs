//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Bus_Login.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class payment
    {
        public int transaction_id { get; set; }
        public Nullable<int> user_id { get; set; }
        public Nullable<int> guest_id { get; set; }
        public Nullable<int> booking_id { get; set; }
        public Nullable<decimal> total_price { get; set; }
        public string payment_status { get; set; }
    
        public virtual Booking Booking { get; set; }
        public virtual Guest Guest { get; set; }
        public virtual Registered_User Registered_User { get; set; }
    }
}
