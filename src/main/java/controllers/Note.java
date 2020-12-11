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
            PreparedStatement ps = Main.db.prepareStatement("SELECT * FROM Notes WHERE NoteID = ?");
            ps.setInt(1, NoteID);
            ResultSet results = ps.executeQuery();
            JSONObject response = new JSONObject();
            if (results.next()) {
                response.put("Note", NoteID);
                response.put("Data", results.getString(1));
            }
            return response.toString();
        } catch (Exception exception) {
            System.out.println("Database error: " + exception.getMessage());
            return "{\"Error\": \"Unable to get item, please see server console for more info.\"}";
        }
    }
}
