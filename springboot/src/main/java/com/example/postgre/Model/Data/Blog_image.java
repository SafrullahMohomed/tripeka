import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "blog_image")
public class Blog_image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer blog_id;
    private String image_url;
    
    public Integer getBlog_id() {
        return blog_id;
    }
    public void setBlog_id(Integer blog_id) {
        this.blog_id = blog_id;
    }
    public String getImage_url() {
        return image_url;
    }
    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }
}