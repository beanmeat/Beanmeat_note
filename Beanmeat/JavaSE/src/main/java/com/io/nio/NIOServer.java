package com.io.nio;

import java.io.IOException;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.*;
import java.util.Iterator;
import java.util.Set;

/**
 * NIO服务器
 */
public class NIOServer {
    public static void main(String[] args) throws IOException {
        // 创建ServerSocketChannel
        ServerSocketChannel ssc = ServerSocketChannel.open();
        ssc.socket().bind(new InetSocketAddress(9090));
        // 设置非阻塞
        ssc.configureBlocking(false);

        // 创建多路复用器
        Selector selector = Selector.open();
        // 将ServerSocketChannel注册到selector，并且告知接受客户端的连接
        ssc.register(selector, SelectionKey.OP_ACCEPT);

        while(true) {
            System.out.println("wait for event happen...");
            // 阻塞，轮询监听所有注册到selector上的channel
            int select = selector.select();
            System.out.println("event has happen...");
            // 获得所有发生事件的channel，遍历所有的channel
            Iterator<SelectionKey> iterator = selector.selectedKeys().iterator();
            while(iterator.hasNext()) {
                SelectionKey selectionKey = iterator.next();
                handle(selectionKey);
                iterator.remove();
            }
        }
    }

    public static void handle(SelectionKey key) throws IOException {
        if(key.isAcceptable()) {
            System.out.println("client connection ...");
            ServerSocketChannel ssc = (ServerSocketChannel)key.channel();
            SocketChannel sc = ssc.accept();
            // 设置成非阻塞
            sc.configureBlocking(false);
            // 注册读事件到Selector上，当读事件发生（针对于客户端），触发事件
            sc.register(key.selector(),SelectionKey.OP_READ);
        } else if (key.isReadable()) {
            System.out.println("client send data ...");
            // 获得client和server之间的channel通道
            SocketChannel sc = (SocketChannel) key.channel();
            // 创建Buffer
            ByteBuffer buffer = ByteBuffer.allocate(1024);
            int len = sc.read(buffer);
            if(len != -1) {
                System.out.println("receive client's data: " + new String(buffer.array(),0,len));
            }
            // 服务端返回数据给客户端
            ByteBuffer bufferToWrite = ByteBuffer.wrap("hello nio".getBytes());
            sc.write(bufferToWrite);
            // 监听下一次事件，读或写
            key.interestOps(SelectionKey.OP_READ | SelectionKey.OP_WRITE);
        }
    }
}
