package org.shaohuogun.reader.portal.message.service;

import java.util.List;

import org.shaohuogun.common.Entity;
import org.shaohuogun.common.Pagination;
import org.shaohuogun.reader.portal.message.dao.MessageDao;
import org.shaohuogun.reader.portal.message.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class MessageService {

	@Autowired
	private MessageDao messageDao;

	@Transactional
	public Message createMessage(Message message) throws Exception {
		if (message == null) {
			throw new NullPointerException("Message cann't be null.");
		}

		Message oldMessage = messageDao.selectByUrl(message.getUrl());
		if (oldMessage != null) {
			return oldMessage;
		} else {
			messageDao.insert(message);
			return messageDao.selectById(message.getId());
		}
	}

	public List<Message> getAllMessage() {
		return messageDao.selectAll();
	}

	public Message getMessage(String id) throws Exception {
		if ((id == null) || id.isEmpty()) {
			throw new IllegalArgumentException("Message's id cann't be null or empty.");
		}

		return messageDao.selectById(id);
	}

	@Transactional
	public Message modifyMessage(Message message) throws Exception {
		if (message == null) {
			throw new NullPointerException("Message cann't be null.");
		}

		messageDao.update(message);
		return messageDao.selectById(message.getId());
	}

	public int countMessageInCategory(String categoryType, String categoryId) throws Exception {
		if ((categoryType == null) || categoryType.isEmpty()) {
			throw new IllegalArgumentException("Category's type cann't be null or empty.");
		}

		if ((categoryId == null) || categoryId.isEmpty()) {
			throw new IllegalArgumentException("Category's id cann't be null or empty.");
		}

		return messageDao.countByCategory(categoryType, categoryId);
	}

	public Pagination getMessagesInCategory(String categoryType, String categoryId, Pagination pagination) throws Exception {
		if ((categoryType == null) || categoryType.isEmpty()) {
			throw new IllegalArgumentException("Category's type cann't be null or empty.");
		}

		if ((categoryId == null) || categoryId.isEmpty()) {
			throw new IllegalArgumentException("Category's id cann't be null or empty.");
		}
		
		if (pagination == null) {
			throw new NullPointerException("Pagination cann't be null.");
		}

		int offset = (pagination.getPageIndex() - 1) * pagination.getPageSize();
		int limit = pagination.getPageSize();
		List<Entity> messages = messageDao.selectByCategory(categoryType, categoryId, offset, limit);
		pagination.setObjects(messages);
		return pagination;
	}

	public Message getMessageByStatus(String status) throws Exception {
		if ((status == null) || status.isEmpty()) {
			throw new IllegalArgumentException("Status cann't be null or empty.");
		}	

		return messageDao.selectByStatus(status);
	}
	
	public Message getMessageBySerialNumber(String serialNumber) throws Exception {
		if ((serialNumber == null) || serialNumber.isEmpty()) {
			throw new IllegalArgumentException("Serial number cann't be null or empty.");
		}	
		
		return messageDao.selectBySerialNumber(serialNumber);
	}

}
