package org.shaohuogun.reader.publisher.controller;

import javax.servlet.http.HttpServletRequest;

import org.shaohuogun.common.Controller;
import org.shaohuogun.common.Utility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import org.shaohuogun.reader.publisher.model.Publisher;
import org.shaohuogun.reader.publisher.service.PublisherService;

@RestController
public class PublisherController extends Controller {

	@Autowired
	private PublisherService publisherService;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String index(HttpServletRequest req) {
		String curUserId = Utility.getUUID().toString();
		req.getSession().setAttribute(CURRENT_USER, curUserId);
		return "Greetings from Spring Boot!";
	}

	@RequestMapping(value = "/publisher", method = RequestMethod.POST)
	public Publisher createPublisher(HttpServletRequest req, @RequestBody Publisher publisher) throws Exception {
		publisher.setId(Utility.getUUID());
		publisher.setCreator("a11039eb-4ba1-441a-bfdb-0d40f61a53dd");		
		return publisherService.createPublisher(publisher);
	}

	@RequestMapping(value = "/publisher/{id}", method = RequestMethod.GET)
	public Publisher getPublisher(@PathVariable String id) throws Exception {
		if ((id == null) || id.isEmpty()) {
			throw new Exception("Invalid argument.");
		}

		return publisherService.getPublisher(id);
	}

}
