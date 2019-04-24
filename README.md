# dream-blog-analyzer
Concept: Users can input their dreams in the morning and receive quick keyword based insights.

MVP:
1. Users must sign up and login in order to access site.
2. Users can create new dreams.
3. Users can view created dreams.
4. Users can edit their dreams.
5. Users can view the interpretation of their dreams.
``````````````````````````````````````````````````````````````````````````````````````````````````````````````````````

Destiny's Duties: 
  -Schema/Model and raw data for dream analysis
  -Authenticiation and bcryptjs
  -Bootstrap and CSS master

Sami's Duties:
 -Express skeletion for two-model CRUD app (use Async and Await)
 -Polishing dream interpretation wording and feedback
 -Wants to learn/do more style stuff

 Jake's Duties:
 -Write the 3rd model CRUD keywordController and interaction with other two models
 -Write middleware requireLogin and Partials
 -Write the Regex search criteria and keyword extractor via Mongoose for dreamblog posts
 -Make sure the DatePicker displays dates from DB properly