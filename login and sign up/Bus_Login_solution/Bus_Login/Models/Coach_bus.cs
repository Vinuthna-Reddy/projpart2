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
    
    public partial class Coach_bus
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Coach_bus()
        {
            this.Bookings = new HashSet<Booking>();
            this.Travels = new HashSet<Travel>();
        }
    
        public int coach_bus_id { get; set; }
        public string Bus_type { get; set; }
        public Nullable<int> No_of_seats { get; set; }
        public Nullable<decimal> cost_per_day { get; set; }
        public string driver_name { get; set; }
        public string driver_license_id { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Booking> Bookings { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Travel> Travels { get; set; }
    }
}
