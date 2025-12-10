
// Rest-Assured (Java) example
// Maven dependencies: rest-assured, junit
import io.restassured.RestAssured;
import org.junit.Test;
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ApiTest {
  @Test
  public void statusEndpoint() {
    RestAssured.baseURI = "https://api.example.com";
    given().when().get("/status").then().statusCode(200).body("status", equalTo("ok"));
  }
}
