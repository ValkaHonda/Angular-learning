package blog.areas.articles.Services;

import blog.areas.articles.entities.Article;
import blog.areas.articles.repositories.ArticleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleServicesImpl implements ArticleServices{
    private ArticleRepository articleRepository;

    @Autowired
    public ArticleServicesImpl(final ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public List<Article> getAllArticles() {
        return this.articleRepository.findAll();
    }
}
