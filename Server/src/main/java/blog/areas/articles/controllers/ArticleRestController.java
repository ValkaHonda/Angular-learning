package blog.areas.articles.controllers;

import blog.areas.articles.Services.ArticleServices;
import blog.areas.articles.entities.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ArticleRestController {
    private ArticleServices articleServices;

    @Autowired
    public ArticleRestController(final ArticleServices articleServices) {
        this.articleServices = articleServices;
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/articles")
    public List<Article> getArticles(){
        return this.articleServices.getAllArticles();
    }
}
