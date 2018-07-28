package blog.areas.articles.entities;

import javax.persistence.*;

@Entity
@Table(name = "articles")
public class Article {
    private Integer id;
    private String title;
    private String description;
    private String author;
    private String imgUrl;

    public Article(String title, String description, String author, String imgUrl) {
        this.title = title;
        this.description = description;
        this.author = author;
        this.imgUrl = imgUrl;
    }

    public Article() { }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    @Column(name ="title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Column(columnDefinition = "TEXT", name ="description")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
    @Column(name ="author")
    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
    @Column(name ="img_url")
    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
