import React from "react";

const LaravelInterview = () => {
  return (
    <div>
      <main className="main-wrapper">
        <div className="section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className=""></div>
                <h4>
                  Interview questions to ask while hiring Laravel Developers
                </h4>
                <h5>The Overview</h5>
                <p className="innovate-list-para">
                  When interviewing prospective Laravel programmers, make sure
                  that your ideal candidate has in-depth knowledge of Laravel
                  frameworks as well as good problem solving skills. You could
                  start by asking these following questions:
                  <br />
                </p>

                <div className="col-md-12 col-sm-6 mb--30">
                  <h5>1. What are the popular features of Laravel?</h5>
                  <p className="innovate-list-para">
                    Eloquent ORM, Query builder, Reverse routing, Class
                    auto-loading, Restful controllers, Blade template engine,
                    Lazy collection, Unit testing, Database seeding, and
                    Migrations, are several popular features of the Laravel
                    framework.
                  </p>

                  <h5>2. What are the popular features of Laravel?</h5>
                  <ul className="list-style">
                    <li className="innovate-list-para">
                      It’s quick and simple
                    </li>
                    <li className="innovate-list-para">
                      Advanced security features
                    </li>

                    <li className="innovate-list-para">
                      Better website performance
                    </li>
                  </ul>

                  <h5 className="mt--60">
                    3. What are the databases supported by the Laravel
                    framework?
                  </h5>
                  <p className="innovate-list-para">
                    Laravel supports the following databases:
                  </p>
                  <ul className="list-style">
                    <li className="innovate-list-para">PostgreSQL</li>
                    <li className="innovate-list-para">SQL Server</li>

                    <li className="innovate-list-para">SQLite</li>
                    <li className="innovate-list-para">MySQL</li>
                  </ul>
                  <h5 className="mt--60">4. How do you generate migrations?</h5>

                  <ul className="list-style">
                    <li className="innovate-list-para">
                      Create a new User entity.
                    </li>
                    <li className="innovate-list-para">
                      Build the application.
                    </li>

                    <li className="innovate-list-para">
                      Generate a migration file.
                    </li>
                    <li className="innovate-list-para">
                      Build and run the migration.
                    </li>
                    <li className="innovate-list-para">
                      Build the application.
                    </li>
                    <li className="innovate-list-para">
                      Generate another migration file.
                    </li>

                    <li className="innovate-list-para">
                      Build and run the migration.
                    </li>
                  </ul>
                  <h5 className="mt--60">
                    5. What is the templating engine used in Laravel?
                  </h5>
                  <p className="innovate-list-para">
                    The templating engine used in Laravel is Blade.
                  </p>

                  <h5 className="mt--60">6. What are Events in Laravel?</h5>
                  <p className="innovate-list-para">
                    An event is an occurrence or action that helps you to
                    subscribe and listen for events that occur in Laravel
                    application. Some of the events are fired automatically by
                    Laravel when any activity occurs.{" "}
                  </p>

                  <h5 className="mt--60">
                    7. Explain important directories used in a common Laravel
                    application.
                  </h5>
                  <p className="innovate-list-para">
                    Directories used in a common Laravel application are:
                  </p>

                  <ul className="list-style">
                    <li className="innovate-list-para">
                      App/: This is a source folder where our application code
                      lives. All controllers, policies, and models are inside
                      this folder.
                    </li>
                    <li className="innovate-list-para">
                      Config/: Holds the app's configuration files. These are
                      usually not modified directly but instead, rely on the
                      values set up in the .env (environment) file at the root
                      of the app.
                    </li>

                    <li className="innovate-list-para">
                      Database/: Houses the database files, including
                      migrations, seeds, and test factories.{" "}
                    </li>
                    <li className="innovate-list-para">
                      Public/: Publicly accessible folder holding compiled
                      assets and of course an index.php file.{" "}
                    </li>
                  </ul>

                  <h5 className="mt--60">
                    8. What is the latest Laravel version?
                  </h5>
                  <p className="innovate-list-para">
                    The latest Laravel version is version 8, which was released
                    on September 8, 2020, with new features like Laravel
                    Jetstream, model factory classes, migration squashing,
                    Tailwind CSS for pagination views and other usability
                    improvements.{" "}
                  </p>

                  <h5 className="mt--60">9. What is MVC architecture?</h5>
                  <p className="innovate-list-para">
                    Model: Model defines logic to write Laravel application.
                  </p>
                  <p className="innovate-list-para">
                    View: It covers the UI logic of Laravel application.
                  </p>
                  <p className="innovate-list-para">
                  Controller: It works as an interface between Model, and View. It is a way how the user interacts with an application.
                  </p>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LaravelInterview;
