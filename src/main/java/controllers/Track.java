package controllers;

import org.glassfish.jersey.media.multipart.FormDataParam;
import org.json.simple.JSONObject;
import server.Main;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Path("track/")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)

public class Track {

    @POST
    @Path("delete/{TrackID}")


    public String trackDelete(@PathParam("TrackID") Integer TrackID) {
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

    public String trackGet(@PathParam("TrackID") Integer TrackID) {
        System.out.println("Invoked Tracks.trackGet() with TrackID " + TrackID);
        try {
            PreparedStatement ps = Main.db.prepareStatement("SELECT Address FROM Tracks WHERE TrackID = ?");
            ps.setInt(1, TrackID);
            ResultSet results = ps.executeQuery();
            JSONObject response = new JSONObject();
            if (results.next() == true) {
                response.put("Track", TrackID);
                response.put("Address", results.getString(1));
            }
            return response.toString();
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to get item, please see server console for more info.\"}";
        }
    }

    @POST
    @Path("update")
    public String updateFood(@FormDataParam("TrackID") Integer TrackID, @FormDataParam("Name") String name, @FormDataParam("Quantity") Integer quantity) {
        try {
            System.out.println("Invoked Food.updateFood/update id=" + id); //fix this error - API methods faulty casuing srver to crash
          PreparedStatement ps = Main.db.prepareStatement("UPDATE Tracks SET Name = ?, Quantity = ? WHERE TrackID = ?");
            ps.setString(1, name);
            ps.setInt(2, quantity);
            ps.setInt(3, TrackID);
            ps.execute();
            return "{\"OK\": \"Food updated\"}";
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to update item, please see server console for more info.\"}";
        }
    }

    @POST
    @Path("create")
    public String foodAdd(@FormDataParam("TrackID") Integer TrackID, @FormDataParam("name") String name) {
        System.out.println("Invoked Food.foodAdd()");
        try {
            PreparedStatement ps = Main.db.prepareStatement("INSERT INTO Food (TrackID, name) VALUES (?, ?)");
            ps.setInt(1, TrackID);
            ps.setString(2, name);
            ps.execute();
            return "{\"OK\": \"Added food.\"}";
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to create new item, please see server console for more info.\"}";
        }

    }
}
