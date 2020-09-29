package controllers;

import server.Main;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.PreparedStatement;

@Path("Tracks/")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)

public class Tracks {

    @POST
    @Path("delete/{TrackID}")

    public String trackDelete(@PathParam("TrackID") Integer TrackID){
        System.out.println("Invoked trackDelete()");
        try {
            PreparedStatement ps = Main.db.prepareStatement("DELETE FROM Tracks WHERE TrackID = ?");
            ps.setInt(1, TrackID);
            ps.execute();
            return "{\"OK\": \"Track deleted\"}";
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to delete item, please see server console for more info.\"}";
        }
    }
}

