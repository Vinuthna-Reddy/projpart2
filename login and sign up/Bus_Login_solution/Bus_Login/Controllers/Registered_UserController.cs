﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using Bus_Login.Models;

namespace Bus_Login.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class Registered_UserController : ApiController
    {
        Bus_ProjectEntities db = new Bus_ProjectEntities();
        [HttpPost]
        public HttpResponseMessage UserLogin(Registered_User u)
        {
            string result = null;
            result = db.sp_LoginCheck(u.username, u.password).FirstOrDefault();
            if (result == null)
                return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid Username Or Password");
            else
                return Request.CreateResponse<string>(result);
        }
        [Route("api/Registered_user/Post")]
        public void Post(Registered_User c)
        {
            db.Registered_User.Add(c);
            db.SaveChanges();
        }
    }
}