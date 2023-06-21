## Anforderung 5.1

Zur Jar-File-Erzeugung (ist aber schon im GitLab-Repo vorhanden, deswegen kann dieser Schritt übersprungen werden):

```bash
mvn clean package
```

daraus lässt sich dann das Docker-Image erstellen und anschließend ausführen:

```bash
docker build -t spring_studienarbeit .

docker run -p 8080:8080 spring_studienarbeit
```

## Anforderung 5.2

Für ein genaueres Verständnis bitte das docker-compose.yml anschauen.

Zum Ausführen lediglich folgenden Befehl tätigen:

### Windows

```
docker-compose up -d
```

### Linux

```
docker compose up -d
```

Bei erstmaliger Ausführung bitte etwas warten (ca. eine Minute) und http://localhost:8080 aufrufen.