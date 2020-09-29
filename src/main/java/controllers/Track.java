package controllers;

import org.json.simple.JSONObject;
import server.Main;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Path("tracks/")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)

public class Track {

    @POST
    @Path("delete/{TrackID}")


    public String trackDelete(@PathParam("TrackID") Integer TrackID){
        System.out.println("Invoked trackDelete()");
        try {
            PreparedStatement ps = Main.db.prepareStatement("DELETE FROM Tracks WHERE TrackID = ?");
            ps.setInt(1, TrackID);
            ps.execute();
            return "{\"OK\": \"Tracks deleted\"}";
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to delete item, please see server console for more info.\"}";
        }
    }
    @GET
    @Path("get/{TrackID}")

    public String trackGet(@PathParam("TrackID") Integer TrackID){
        System.out.println("Invoked Tracks.trackGet() with TrackID " + TrackID);
        try {
            PreparedStatement ps = Main.db.prepareStatement("SELECT Address FROM Tracks WHERE TrackID = ?");
            ps.setInt(1, TrackID);
            ResultSet results = ps.executeQuery();
            JSONObject response = new JSONObject();
            if (results.next()== true) {
                response.put("Track", TrackID);
                response.put("Address", results.getString(1));
            }
            return response.toString();
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to get item, please see server console for more info.\"}";
        }
    }

}


