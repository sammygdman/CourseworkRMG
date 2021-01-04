package controllers;

import org.json.simple.JSONObject;
import server.Main;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

@Path("note/")
@Consumes(MediaType.MULTIPART_FORM_DATA)
@Produces(MediaType.APPLICATION_JSON)
public class Note {
    @GET
    @Path("get/{NoteID}")

    public String noteGet(@PathParam("NoteID") Integer NoteID) {
        System.out.println("Invoked Notes.noteGet() with NoteID " + NoteID);
        try {
            PreparedStatement ps = Main.db.prepareStatement("SELECT Frequency FROM Notes WHERE NoteID = ?");
            ps.setInt(1, NoteID);
            ResultSet results = ps.executeQuery();
            if (results.next()) {
                JSONObject response = new JSONObject();
                response.put("Data", results.getFloat(1));
                return response.toString();
            }
            return "{\"Error\": \"Unable to get item, please see server console for more info.\"}";
        } catch (Exception exception) {
            return "{\"Error\": \"Unable to get item, please see server console for more info.\"}";
        }
    }
}
